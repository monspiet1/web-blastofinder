
export {};

declare global {
  type a = {
    name: string
    detected_objects: {
      prediction: Array<{
        x: number;
        y: number;
        width: number;
        height: number;
        confidence: number;
        class: string;
        class_id: number;
      }>;
      image: {
        width: number;
        height: number;
      };
    };
    dt_creation: Date;
    id_user: string | undefined;
  };
}



