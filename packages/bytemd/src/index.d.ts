import { EditorConfiguration } from 'codemirror';
import { Node } from 'unist';
import * as unified from 'unified';
import { SvelteComponent } from 'svelte';

export interface Plugin {
  /**
   * Transformers for unified to be applied
   */
  transformer?: any; // TODO:
  /**
   * Test if this node should be rendered
   */
  test(node: Node): boolean;
  /**
   * The component to render this node
   */
  component: typeof SvelteComponent;
  /**
   * The extra props passed to component
   */
  props?: Record<string, unknown>;
}

export interface EditorProps {
  source: string;
  onChange(value: string): void;
  fileHandler: (file: File) => Promise<string>;
  plugins?: Plugin[];
}

export declare class Editor {
  constructor(options: { target: HTMLElement; props: EditorProps });
}

export interface ViewerProps {
  source: string;
  plugins?: Plugin[];
}

export declare class Viewer {
  constructor(options: { target: HTMLElement; props: ViewerProps });
}
