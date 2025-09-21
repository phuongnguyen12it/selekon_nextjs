'use client'

import { Provider } from 'react-redux';
import { store } from '@/lib/store';

interface RexduxProviderProps {
    children: React.ReactNode;
}

export default function ReduxProvider({ children }: RexduxProviderProps) {
    return <Provider store={store}>{ children }</Provider>
}