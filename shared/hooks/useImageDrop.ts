import { useEffect } from 'react';

type UseImageDropProps = {
  ref: React.RefObject<HTMLElement | null>;
  onDropImages: (files: File[]) => void | Promise<void>;
  onDragChange?: (isDragging: boolean) => void;
};

export function useImageDrop({
  ref,
  onDropImages,
  onDragChange,
}: UseImageDropProps) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const preventDefaults = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const handleDrop = async (e: DragEvent) => {
      preventDefaults(e);

      const files = Array.from(e.dataTransfer?.files || []).filter(
        (file: File) => file.type.startsWith('image/'),
      );

      if (files.length === 0) return;
      await onDropImages(files);
      onDragChange?.(false);
    };

    const handleDragEnter = (e: Event) => {
      preventDefaults(e);
      onDragChange?.(true);
    };

    const handleDragLeave = (e: Event) => {
      preventDefaults(e);
      onDragChange?.(false);
    };

    const handleDragOver = (e: Event) => {
      preventDefaults(e);
    };

    el.addEventListener('dragenter', handleDragEnter);
    el.addEventListener('dragover', handleDragOver);
    el.addEventListener('dragleave', handleDragLeave);
    el.addEventListener('drop', handleDrop);

    return () => {
      el.removeEventListener('dragenter', handleDragEnter);
      el.removeEventListener('dragover', handleDragOver);
      el.removeEventListener('dragleave', handleDragLeave);
      el.removeEventListener('drop', handleDrop);
    };
  }, []);
}
