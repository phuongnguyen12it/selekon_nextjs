'use client';

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/store';
import { increment, decrement, incrementByAmount, reset, setLoading } from '@/lib/store/slices/counterSlice';

const ReduxDemo = () => {
    // use typed hooks
    const count = useAppSelector((state) => state.counter.value);
    const isLoading = useAppSelector((state) => state.counter.isLoading);
    const dispatch = useAppDispatch();

    const handleAsyncIncrement = async () => {
        dispatch(setLoading(true));
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch(incrementByAmount(5));
        dispatch(setLoading(false));
    }

    return (
        <div className="p-6 border rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Redux Demo</h2>

            <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">{ count }</div>
                <div className="text-sm text-gray-500">
                    {isLoading ? 'Loading ...' : 'Ready'}
                </div>
            </div>

             <div className="grid grid-cols-2 gap-2 mb-4">
                 <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50" 
                 onClick={() => dispatch(increment())}
                 disabled={isLoading}
                 >+1</button>
                 <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50" 
                 onClick={() => dispatch(decrement())}
                 disabled={isLoading}
                 >-1</button>
                 <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50" 
                 onClick={() => dispatch(incrementByAmount(10))}
                 disabled={isLoading}
                 >+10</button>
                 <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50" 
                 onClick={() => dispatch(reset())}
                 disabled={isLoading}
                 >Reset</button>
             </div>

            <button className="w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50"
                onClick={handleAsyncIncrement}
                disabled={isLoading}
            >
                {isLoading ? 'Loading ...': 'Async +5'}
            </button>

            <div className="mt-4 text-xs text-gray-400 text-center">
                Redux Toolkit + Typescript
            </div>
        </div>
    )
}

export default ReduxDemo;