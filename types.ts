
import React from 'react';

export interface Message {
  role: 'user' | 'model';
  content: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface DetailedProject {
  id: number;
  name: string;
  owner: string;
  year: string;
  progress: string;
  category: 'Pemerintah' | 'Swasta';
}
