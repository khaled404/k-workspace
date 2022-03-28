import { Tree, formatFiles, updateJson, names } from '@nrwl/devkit';
import { Linter } from '@nrwl/linter';
import { libraryGenerator, componentGenerator } from '@nrwl/react';

interface NewAppSchemaOptions {
  name: string;
}

export default async function (tree: Tree, schema: NewAppSchemaOptions) {
  const fileName = names(schema.name).fileName;

  await libraryGenerator(tree, {
    name: schema.name,
    directory: 'apps',
    importPath: `@k-workspace/${fileName}`,
    style: 'css',
    skipTsConfig: true,
    skipFormat: true,
    unitTestRunner: 'jest',
    linter: Linter.EsLint,
  });

  await componentGenerator(tree, {
    name: schema.name,
    project: `apps-${fileName}`,
    style: 'none',
    flat: true,
  });

  const exportFilePath = `libs/apps/${fileName}/src/index.ts`;

  const newExport = Buffer.from(
    `export { default as ${
      names(schema.name).className
    }} from './lib/${fileName}';`
  );
  tree.write(exportFilePath, newExport);

  updateJson(tree, './tsconfig.base.json', (value) => {
    return {
      ...value,
      compilerOptions: {
        ...value.compilerOptions,
        paths: {
          ...value.compilerOptions.paths,
          [`@k-workspace/${fileName}`]: [exportFilePath],
        },
      },
    };
  });

  updateJson(tree, './libs/apps/projects.json', (value) => {
    const newProject = {
      id: value[value.length - 1].id + 1,
      imagePath: `/images/${fileName}.png`,
      importPath: `@k-workspace/${fileName}`,
      ...schema,
    };
    return [...value, newProject];
  });
  await formatFiles(tree);
}
