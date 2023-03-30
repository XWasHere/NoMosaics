import { types } from "replugged";

const getEmbedSizes = "window.replugged.plugins.getExports('co.xutils.NoMosaics').getEmbedSizes";
const patches: types.PlaintextPatch[] = [
  {
    find: /\w+\(\)\.oneByTwoGridItem/g,
    replacements: [
      {
        match: /\w+\(\)\.(oneByTwoGridItem|oneByTwoDuoItem|oneByTwoSoloItem|twoByOneGridItem)/g,
        replace: '"normalFuckingEmbedItem"',
      },
      {
        match:
          /[a-zA-Z]+\(\)\.(oneByOneGridSingle|oneByOneGridMosaic|oneByOneGrid|oneByTwoGrid|oneByTwoLayoutThreeGrid|twoByTwoGrid|twoByThreeGrid|threeByThreeGrid)/g,
        replace: '"normalFuckingEmbed"',
      },
      {
        match: /attachmentKind:(\w+\((\w+\.attachment).id\)),maxWidth:\w+,maxHeight:\w+/g,
        replace: `attachmentKind:$1,...${getEmbedSizes}($2)`,
      },
    ],
  },
  {
    find: /[a-zA-Z]+===[a-zA-Z]+\.[a-zA-Z]+\.MOSAIC/,
    replacements: [
      {
        match: /[a-zA-Z]+===[a-zA-Z]+\.[a-zA-Z]+\.MOSAIC/g,
        replace: "false",
      },
      {
        match: /(\w+===\w+\.\w+\.)RESPONSIVE/g,
        replace: "($1RESPONSIVE || $1MOSAIC)",
      },
      {
        match: /void 0===\w+\?([43])00:\w+/g,
        replace: "$100",
      },
    ],
  },
  {
    replacements: [
      {
        match: /(renderMetadata=function\(\)\{)/g,
        replace:
          "$1return window.replugged.plugins.getExports('co.xutils.NoMosaics').VideoMetadata(this);",
      },
    ],
  },
];

export default patches;
