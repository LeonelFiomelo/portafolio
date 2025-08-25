---
id: 6
lang: es
order: 6
type: Privado
platform: Mobile
title: QR Tickets
subtitle: Aplicación móvil para la gestión de entradas QR en eventos.
description: Aplicación móvil que permite la creación y administración de entradas QR, ofreciendo dos modalidades de tickets (general y VIP). Desarrollada como implementación inicial del sistema de tickets QR, sirvió de base para la posterior evolución hacia la plataforma web TicketsFlow, ampliando las funcionalidades de gestión y distribución.
characteristics:
    - Creación y administración de entradas QR para eventos.
    - "Dos tipos de entradas disponibles: general y VIP."
    - Compartir entradas con invitados mediante dispositivos móviles.
    - Base inicial para la posterior evolución hacia TicketsFlow.
challenges:
    - Generación de códigos QR únicos desde dispositivos móviles.
    - Integración con Firebase para autenticación y persistencia de datos.
    - Diseño de una interfaz ligera y usable en diferentes dispositivos.
    - Establecer la arquitectura inicial para escalar a una plataforma web más completa.
skills:
    - React Native
    - Expo Go
    - React Native Styles
    - Firestore
    - Firebase Hosting
    - Firebase Authentication
    - Figma
images:
    - /qrtickets/1.jpg
    - /qrtickets/2.jpg
    - /qrtickets/3.jpg
    - /qrtickets/4.jpg
    - /qrtickets/5.jpg
    - /qrtickets/6.png
    - /qrtickets/7.jpg
    - /qrtickets/8.png
mockups:
    - /mockups/qrtickets/qrtickets-1.png
    - /mockups/qrtickets/qrtickets-2.png
librariesFrontend:
    - {
        name: "@react-native-async-storage/async-storage",
        version: "1.23.1"
    }
    - {
        name: expo-barcode-scanner,
        version: "12.5.3"
    }
    - {
        name: expo-camera,
        version: "16.0.16"
    }
    - {
        name: expo-image-picker,
        version: "16.0.6"
    }
    - {
        name: expo-permissions,
        version: "14.2.1"
    }
    - {
        name: expo-sharing,
        version: "13.0.1"
    }
    - {
        name: react-native-svg,
        version: "15.8.0"
    }
    - {
        name: react-native-uuid,
        version: "2.0.1"
    }
---