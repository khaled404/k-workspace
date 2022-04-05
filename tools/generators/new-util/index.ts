import {
  Tree,
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
} from '@nrwl/devkit';

interface UtilSchemaOptions {
  name: string;
}

const exportFilePath = 'libs/utils/src/index.ts';

export default async function (tree: Tree, schema: UtilSchemaOptions) {
  const fileName = names(schema.name).fileName;
  generateFiles(
    tree,
    joinPathFragments(__dirname, './template'),
    `./libs/utils/src/${fileName}`,
    {
      name: names(schema.name).className,
      propertyName: names(schema.name).propertyName,
      fileName: fileName,
      tmpl: '',
    }
  );

  const file = tree.read(exportFilePath);

  const newExports = Buffer.from(`export * from './${fileName}/${fileName}';`);

  tree.write(exportFilePath, Buffer.concat([file, newExports]));

  await formatFiles(tree);
}
