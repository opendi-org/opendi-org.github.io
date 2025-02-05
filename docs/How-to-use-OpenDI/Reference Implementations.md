Developed alongside the OpenDI standards, these open source projects demonstrate OpenDI compliance with fully-functional example implementations.

These projects are currently under active development, but prototypes and source code are available. We encourage you to check these projects out! Contribute code or feedback, make forks or extensions, submit issues, break things!

## CDD Authoring Tool

[Try it out >>](https://opendi.org/cdd-authoring-tool/)

![CDD Authoring Tool Preview](../img/CDD%20Authoring%20Tool%20Preview.png)

This tool allows you to construct OpenDI standards-compliant Causal Decision Diagrams in your browser. It offers a graphical view using the [JointJS](https://www.jointjs.com/) graphing library, and a JSON view using the [svelte-jsoneditor](https://github.com/josdejong/svelte-jsoneditor) project.

This project aims to demonstrate a working use case for the [OpenDI JSON Schema](https://opendi.org/api-specification/schemas/cdm-full-schema). The JSON editor view dynamically mirrors changes and selections from the graphical view, and vice versa, allowing you to interactively explore and manipulate the structure of a Causal Decision Model's JSON data.

### Contributors

- [Isaac Kellogg](https://github.com/isaac-kellogg-quantellia)
- [Alex Cail](https://github.com/ancail) (at [Katabasis](https://www.katabasis.org/))

## Simple Model API (Go)

[Browse the repo >>](https://github.com/opendi-org/example-api-go)

![Model API Preview](../img/Model%20API%20Preview.png)

This repository provides a working example implementation of the [OpenDI API Specification](../index.md#working-draft-api-specification). Written in Go, this implementation provides straightforward examples of type definitions, endpoint implementations, and ORM/database integration. The API uses [Gin](https://github.com/gin-gonic/gin) and [GORM](https://gorm.io/). 

### Disclaimer

*This is not a commercial API!*

This API is a functional reference example. It is not intended to be a commercially-viable solution. This API was not constructed with careful consideration for scalability, security, user authentication, etc.

### Contributors

- [Isaac Kellogg](https://github.com/isaac-kellogg-quantellia)

## Docker Compose Authoring Tool

[Get started >>](https://github.com/opendi-org/containerized-authoring-demo?tab=readme-ov-file#containerized-cdd-authoring-demo)

![Authoring Tool Compose Preview](../img/Authoring%20Tool%20Compose%20Preview.png)

 Alongside the CDD Authoring Tool frontend and the Simple Model API, we've created Docker Compose files and configurations that combine these projects, allowing you to host a local version of the Authoring Tool complete with API integration for saving and loading multiple Causal Decision Models from a simple SQL database.

The Compose project creates 3-4 Docker services:  
- Go API
- SQL database (or volume for SQLite)
- Apache frontend server (hosts web tool frontend)
- Nginx server for reverse proxy

See [the README](https://github.com/opendi-org/containerized-authoring-demo?tab=readme-ov-file#how-to-use) for instructions on setting up a local deployment.

The component projects can also be deployed individually. The Authoring Tool is configurable for use with any OpenDI-compliant API, and the API can be deployed separately.

### Contributors

- [Isaac Kellogg](https://github.com/isaac-kellogg-quantellia)