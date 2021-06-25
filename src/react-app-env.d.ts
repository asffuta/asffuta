/// <reference types="react-scripts" />

interface HomeState {
  searchText?: string;
  curTime?: string;
  curDate?: string;
}

interface WelcomeState {
  curScroll: number;
}

interface StudyList {
  [name: number]: StudyOutline;
}

interface StudyOutline {
  [key: string]: any;
  [key: number]: any;
  text?: string;
}
