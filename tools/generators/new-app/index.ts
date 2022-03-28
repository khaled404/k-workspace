import { Tree, formatFiles, updateJson } from '@nrwl/devkit';
import { Linter } from '@nrwl/linter';
import { libraryGenerator } from '@nrwl/react';
import { join } from 'path';

export default async function (tree: Tree, schema: any) {
  await libraryGenerator(tree, {
    name: schema.name,
    directory: 'apps',
    importPath: `@apps/${schema.name}`,
    style: 'none',
    skipTsConfig: false,
    skipFormat: false,
    unitTestRunner: 'jest',
    linter: Linter.EsLint,
  });

  updateJson(tree, join('./libs/apps/projects.json'), (value) => {
    const newJson = {
      ...value,
      [schema.name]: { ...schema, imagePath: `/${schema.name}.png` },
    };

    return newJson;
  });

  await formatFiles(tree);
}
