import React from 'react';

export interface DataInterface {
  id: number;
  title: string;
  client: string;
  due: string;
  status: string;
  count?: number;
  docs?: number;
  amount: number;
  method: string[];
  material: string[];
}
export interface CardProps {
  data: DataInterface;
}
export interface IFilter {
  title: string;
  name: string;
  options: string[];
  isToggleSelect: boolean;
  buttonRef: React.RefObject<HTMLButtonElement>;
  onClickSelect: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string
  ) => void;
  selected: string[];
  setSelected: (arr: string[]) => void;
}

export interface IFilterMenu {
  toggle: boolean;
  handleReset: () => void;
  handleToggle: () => void;
  selectedMethod: string[];
  setSelectedMethod: (arr: string[]) => void;
  selectedMaterial: string[];
  setSelectedMaterial: (arr: string[]) => void;
}

export interface IModal {
  data: boolean;
  handler: () => void;
}

export interface IToggle {
  toggle: boolean;
  handleToggle: () => void;
}
