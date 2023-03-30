import { Injector, Logger, webpack, util } from "replugged";
import DeleteButton from "./components/DeleteButton";
export { default as VideoMetadata } from "./components/VideoMetadata";

const { filters } = webpack;

import "./style.css";

const inject = new Injector();
const logger = Logger.plugin("NoMosaics");

export function getEmbedSizes(attachment: { width: number; height: number }): {
  maxWidth: number;
  maxHeight: number;
} {
  let { width, height } = attachment;

  let wratio = 1;
  let hratio = 1;

  if (width > 400) wratio = 400 / width;
  width = Math.round(width * wratio);
  height = Math.round(height * wratio);
  if (height > 300) hratio = 300 / height;

  let ratio = Math.min(hratio * wratio, 1);

  return {
    maxWidth: Math.round(attachment.width * ratio),
    maxHeight: Math.round(attachment.height * ratio),
  };
}

let style: HTMLLinkElement;
export async function start(): Promise<void> {
  const deleteIconModule = await webpack.waitForModule<{
    exports: { [n: string]: () => object };
  }>(filters.bySource("6.99902V18.999C5"), { raw: true });
  const deleteIconComponent = webpack.getFunctionKeyBySource(
    deleteIconModule.exports,
    "6.99902V18.999C5",
  );
  if (typeof deleteIconComponent == "string") {
    inject.instead(deleteIconModule.exports, deleteIconComponent, DeleteButton);
  }
}

export function stop(): void {
  inject.uninjectAll();
  style?.remove();
}
