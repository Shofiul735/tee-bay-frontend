'use client'

import { notification } from 'antd';
import React, { useCallback } from 'react';

const useNotificationHook = () => {
    const [api, contextHolder] = notification.useNotification();

    const triggerNotification = useCallback((type: 'info' | 'warning' | 'success' | 'error', title: string, description: string) => {
        api[type]({
            message: title,
            description: <React.Fragment>{description}</React.Fragment>,
            placement: 'topRight'
        });
    }, [api]);

    return { triggerNotification, contextHolder };
};

export default useNotificationHook;