export interface Train {
  train_number: string;
  category_name: string;
  category_short_name: string;
  train_name: any;
  path: any;
  platform: any;
  departure: {
    scheduled: string;
    actual: any;
  };
  arrival: {
    scheduled: string;
    actual: any;
  };
  parking: any;
  late: any;
  time_with_late: any;
  route: {
    start: string;
    end: string;
    default: string;
    via: string;
    stops: string;
  };
}

interface TrainList {
  suburban: Train[];
  long_distance: Train[];
}

export interface TrainData {
  departure: TrainList;
  arrival: TrainList;
  all: TrainList;
}
