/* eslint-disable prettier/prettier */
import csvParse from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IImportSpecification {
  name: string;
  description: string;
}

@injectable()
class ImportSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationsRepository
  ) { }

  loadSpecification(file: Express.Multer.File): Promise<IImportSpecification[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const specification: IImportSpecification[] = [];
      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile.on("data", async (line) => {
        const [name, description] = line;

        specification.push({
          name,
          description
        })
      })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(specification);
        })
        .on("error", err => {
          reject(err);
        })


    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const specification = await this.loadSpecification(file);


    specification.map(async (specification) => {
      const { name, description } = specification;

      const existsSpecification = await this.specificationRepository.findByNameSpecification(name);

      if (!existsSpecification) {
        await this.specificationRepository.create({
          name,
          description
        })
      }
    });
  }

}

export { ImportSpecificationUseCase };
