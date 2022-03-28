import { Tree, formatFiles, names } from '@nrwl/devkit';
import { componentStoryGenerator, componentGenerator } from '@nrwl/react';

const uiExportFilePath = '/libs/shared/ui/src/index.ts';

export default async function (tree: Tree, schema: any) {
  const options = {
    componentPath: `lib/${names(schema.name).name}/${
      names(schema.name).fileName
    }.tsx`,
    project: 'shared-ui',
  };

  await componentGenerator(tree, {
    name: schema.name,
    project: options.project,
    style: 'none',
  });

  await componentStoryGenerator(tree, options);

  const file = tree.read(uiExportFilePath);

  const newExport = Buffer.from(
    `export * from './${options.componentPath.split('.')[0]}';`
  );

  tree.write(uiExportFilePath, Buffer.concat([file, newExport]));

  await formatFiles(tree);
}

/*
function convertComponentName([first, ...rest]: any) {
  const value = first.toUpperCase() + rest.join('');
  const charIndexes = [];
  const rgx = /[^a-z'-']/gi;
  const formatName = value.replaceAll(rgx, (_: string, index: number) => {
    charIndexes.push(index);
    return value[index + 1] ? value[index + 1].toUpperCase() : '';
  });
  return formatName
    .split('')
    .filter((item: string, index: number) =>
      charIndexes.includes(index - 1) ? '' : item
    )
    .join('');
}


const fileName = convertComponentName(schema.name)
   generateFiles(
    tree,
    joinPathFragments(__dirname, './template'),
    `./libs/shared/ui/src/lib/${schema.name}`,
    {
      name: fileName,
      fileName: names(fileName).className,
    }
  );
  console.log(getWorkspacePath(tree));


*/
