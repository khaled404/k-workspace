import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

interface NewArticleSchemaOptions {
  name: string;
}
export default async function (tree: Tree, schema: NewArticleSchemaOptions) {
  await libraryGenerator(tree, { name: schema.name });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
