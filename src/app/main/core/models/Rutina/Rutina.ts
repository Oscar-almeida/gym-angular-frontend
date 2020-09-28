import { RutinaEjercicio } from './RutinaEjercicio';

export interface Rutina {
    id: number;
    nombre: string;
    description: string;
    aprendizIdentificacion: string;
    RutinaEjercicio: RutinaEjercicio[];
}