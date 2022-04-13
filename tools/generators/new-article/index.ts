import {
  Tree,
  formatFiles,
  names,
  generateFiles,
  joinPathFragments,
} from '@nrwl/devkit';

interface NewArticleSchemaOptions {
  title: string;
  author: string;
  tags: string[];
}
export default async function (tree: Tree, schema: NewArticleSchemaOptions) {
  generateFiles(tree, joinPathFragments(__dirname, './template'), '/articles', {
    ...schema,
    fileName: names(schema.title).fileName,
    tags: schema.tags.join(),
    creationDate: new Date().toLocaleDateString(),
  });
  await formatFiles(tree);
}
