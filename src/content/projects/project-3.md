---
id: 3
lang: es
order: 3
type: Privado
platform: Web
title: CDI
subtitle: Adaptación al español rioplatense del Communicative Development Inventories (CDI).
description: Sistema web que adapta al español rioplatense la forma II del Communicative Development Inventories (CDI), un instrumento de evaluación para padres. Permite registrar información sobre el desarrollo temprano de habilidades lingüísticas en niños, abarcando comprensión y producción de vocabulario, gestos y gramática, aportando datos valiosos para profesionales de la salud y la educación.
characteristics:
    - Adaptación digital de un instrumento de evaluación lingüística infantil.
    - Registro de información sobre vocabulario y gramática en niños.
    - Generación de reportes en PDF y exportación a Excel.
    - Plataforma pensada para profesionales y padres, con acceso seguro.
challenges:
    - Adaptación del cuestionario a formato digital sin perder rigurosidad metodológica.
    - Generación de documentos PDF y hojas de cálculo desde datos dinámicos.
    - Diseño de base de datos que permita organizar partes, subpartes y secciones del instrumento.
skills:
    - React Js
    - Next Js
    - Typescript
    - Tailwind Css
    - .NET
    - Entity Framework
    - SQL Server
    - DbDiagram
images:
    - /cdi/1.png
    - /cdi/3.png
    - /cdi/2.png
    - /cdi/4.png
mockups:
    - /mockups/cdi/cdi-1.png
    - /mockups/cdi/cdi-2.png
librariesFrontend:
    - {
        name: jose,
        version: "6.0.10"
    }
    - {
        name: html2canvas,
        version: "1.4.1"
    }
    - {
        name: jspdf,
        version: "3.0.0"
    }
    - {
        name: xlsx,
        version: "0.18.5"
    }
librariesBackend:
    - {
        name: AutoMapper,
        version: "13.0.1"
    }
    - {
        name: Authentication Jwt Bearer,
        version: "8.0.8"
    }
---