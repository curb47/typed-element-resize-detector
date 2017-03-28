declare function elementResizeDetectorMaker(options?: elementResizeDetectorMaker.ErdmOptions): elementResizeDetectorMaker.Erd;

/**
 * Custom typings descriptor for Element Resize library https://github.com/wnr/element-resize-detector
 */

declare namespace elementResizeDetectorMaker {
    interface ErdmOptions {
        strategy?: 'scroll' | 'object';
    }

    interface Erd {
        listenTo(element: HTMLElement, callback: (elem: HTMLElement) => void);
        removeListener(element: HTMLElement, callback: (elem: HTMLElement) => void);
        removeAllListeners(element: HTMLElement);
        uninstall(element: HTMLElement);
    }
}

export = elementResizeDetectorMaker;
