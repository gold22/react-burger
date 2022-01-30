import type { Middleware, MiddlewareAPI } from 'redux';
import type { TApplicationActions, TDispatch, TRootState, TSocketActions } from '../types/store';

// eslint-disable-next-line import/prefer-default-export
export const socketMiddleware = (wsUrl: string, wsActions: TSocketActions): Middleware => ((
    store: MiddlewareAPI<TDispatch, TRootState>,
) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TApplicationActions) => {
        const { dispatch } = store;
        const { type } = action;
        const { open, close, onOpen, onClose, onError, onMessage } = wsActions;

        if (type === open) {
            socket = new WebSocket(wsUrl);
            socket.onopen = () => {
                dispatch({ type: onOpen });
            };
            socket.onerror = () => {
                dispatch({ type: onError });
            };
            socket.onclose = (event) => {
                if (event.wasClean) {
                    dispatch({ type: onClose, message: null });
                } else {
                    const message = 'Произошло неожиданное закрытие соединения'
                        + `: Код состояния WebSocket - ${event.code}`;
                    dispatch({ type: onClose, message });
                }
            };
            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                dispatch({ type: onMessage, data });
            };
        } else if (type === close && socket) {
            socket.close();
            socket = null;
        }
        next(action);
    };
}) as Middleware;
