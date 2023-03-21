export type ListItemType = { title: string; destination: string };
export interface NavProps {
  isOpen: boolean;
  onClose: () => void;
}
