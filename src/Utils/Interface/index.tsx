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
  setIsToggleSelect: Function;
  buttonRef: React.RefObject<HTMLButtonElement>;
  onClickSelect: Function;
  selected: string[];
  setSelected: Function;
}

export interface IFilterMenu {
  handleToggle: () => void;
  methodSelected: string[];
  setMethodSelected: Function;
  materalSelected: string[];
  setMaterialSelected: Function;
}

export interface IModal {
  data: boolean;
  handler: () => void;
}

export interface IToggle {
  handleToggle: () => void;
}
