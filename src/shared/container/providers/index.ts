import { container } from 'tsyringe'

import { IDateProvider } from './dateProvider/IDateProvider';
import { DayJsDateProvider } from './dateProvider/implementations/DateJsProvider';

container.registerSingleton<IDateProvider>(
  "DayJsDateProvider",
  DayJsDateProvider
)