# Módulo Domain Compartido

Este módulo contiene el núcleo de dominio para la tienda online, centralizando entidades, DTOs, interfaces y lógica de negocio reutilizable.

## Estructura
- **entities/**: Modelos de negocio (Producto, Pedido, Pago, Categoria)
- **dtos/**: Data Transfer Objects para validación y transporte
- **interfaces/**: Interfaces para servicios y repositorios
- **services/**: Lógica de negocio reutilizable

## Integración
1. El módulo `domain` se importa en los tres proyectos (`rest`, `graphql`, `ws`).
2. Cada proyecto utiliza las entidades, DTOs e interfaces desde `domain` para garantizar consistencia y evitar duplicidad.
3. La lógica de negocio (servicios) puede ser extendida o usada directamente en los controladores, resolvers y gateways.

## Ventajas
- **Reutilización**: Un solo núcleo para todos los proyectos.
- **Claridad**: Separación entre dominio y capa de aplicación.
- **Escalabilidad**: Fácil de mantener y extender.

## Ejemplo de importación
```typescript
import { Producto, ProductoDto } from '../../domain/entities/producto.entity';
```

## Estructura sugerida
```
domain/
  entities/
    producto.entity.ts
    pedido.entity.ts
    pago.entity.ts
    categoria.entity.ts
  dtos/
    producto.dto.ts
    pedido.dto.ts
    pago.dto.ts
    categoria.dto.ts
  interfaces/
    producto.interface.ts
    ...
  services/
    producto.service.ts
    ...
  README.md
```
