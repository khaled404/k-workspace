import { Tree, formatFiles, updateJson } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { join } from 'path';

export default async function (tree: Tree, schema: any) {
  await libraryGenerator(tree, {
    name: schema.name,
    directory: 'apps',
    importPath: '@apps',
  });

  updateJson(tree, join('./libs/apps/projects.json'), (value) => {
    const newJson = {
      ...value,
      [schema.name]: {
        version: schema.version,
        developer: schema.developer,
        name: schema.name,
        description: schema.description,
        published: schema.published,
        tags: schema.tags,
      },
    };

    return newJson;
  });

  await formatFiles(tree);
}
