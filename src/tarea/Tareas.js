import { Tarjeta, BlogPost} from './Tarea1.js';
import { MatchNombre, PasswordInput, ValidationInput} from './Tarea2.js';
import { UncontrolledCheckbox, CheckboxList } from './Tarea3.js';
import { CheckboxListWithState } from './Tarea4.js';

export function Tareas(props) {
  return (
    <>
      <Tarjeta 
        nombre="Rodrigo Fernadez"
        titulo="Progamador Front End"
        imagen="https://avatars.githubusercontent.com/u/88414096?v=4"              
      />
      <BlogPost
        titulo="Ardillas"
        parrafos={`Hoy vi una ardilla.
                La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
                Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
        autor={{
              nombre: "Rodrigo Fernadez",
              titulo: "Progamador Front End",
              imagen: "https://avatars.githubusercontent.com/u/88414096?v=4"
              }}
      />
      <MatchNombre
        nombre="rodrigo"
      />
      <PasswordInput
        minLength={8}
      />
      <ValidationInput
        isPassword={true}
        validation={(value) => value.length >= 8}
      />
      <UncontrolledCheckbox
        name='uno'
        initialValue={false}
      />
      <CheckboxList
        items={{
          uno: false,
          dos: true,
          tres: false,
        }}
      />

      <CheckboxList
        items={{
          uno: false,
          dos: true,
          tres: false,
        }}
      />
      <CheckboxListWithState
        items={{
          uno: false,
          dos: true,
          tres: false,
        }}
      />

    
    </>
);
}