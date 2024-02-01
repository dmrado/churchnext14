'use client'
import React, { useEffect } from 'react';
import Script from 'next/script';

const YandexMetrika = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                window.ym = window.ym || function() {
                    (window.ym.q = window.ym.q || []).push(arguments);
                };
                ym(96326668, "init", {
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true
                });
            } catch(e) {
                console.error(e);
            }
        }
    }, []);

    return (
        <>
            <Script
                strategy="afterInteractive"
                src="https://mc.yandex.ru/metrika/tag.js?id=96326668"
            />
        </>
    );
};

export default YandexMetrika;