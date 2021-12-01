import React, { createContext, Dispatch } from 'react'
import { IUser } from '../../App';
import { IContextProps } from '../../App';

export const UserContext = createContext({} as IContextProps);

