import React from 'react';
import {
  useSelector as originalUseSelector,
  useDispatch as originalUseDispatch,
  RootStateOrAny,
  TypedUseSelectorHook,
  shallowEqual,
} from 'react-redux';

export const useSelector: TypedUseSelectorHook<RootStateOrAny> = (state: RootStateOrAny) =>
  originalUseSelector(state);
export const useDispatch = () => originalUseDispatch();

export type ParametrizedSelector<A, R> = (state: RootStateOrAny, arg: A) => R;
export const proxyParam: <T>(_: RootStateOrAny, param: T) => T = (_, param) => param;
export function useParamSelector<A, R>(
  selectorCreator: () => ParametrizedSelector<A, R>,
  argument: A,
  equalityFn: (left: R, right: R) => boolean = shallowEqual,
): R {
  const memoizedSelector = React.useMemo(() => {
    const parametrizedSelector = selectorCreator();
    return (state: RootStateOrAny): R => parametrizedSelector(state, argument);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeof argument === 'object' ? JSON.stringify(argument) : argument]);
  return useSelector(memoizedSelector, equalityFn);
}
