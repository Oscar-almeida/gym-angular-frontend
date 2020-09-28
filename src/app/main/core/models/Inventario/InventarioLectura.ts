export interface InventarioLectura {
    id: number;
    nombre: string;
    descripcion: string;
    cantidadTotal: number;
    cantidadDisponible: number;
    imagen: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}