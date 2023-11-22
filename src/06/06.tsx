import React, {ChangeEvent, MouseEvent} from 'react';
// const callBack = (): number => {
//     alert('123')
//     return 12;
// }
//
// window.setTimeout(callBack, 1000);


// export const User = () => {
//
//     const deletedUser = (event: MouseEvent<HTMLButtonElement>) => {
//         alert(event.currentTarget.name)
//     }
//     const saveUser = () => {
//         alert('user save')
//     }
//
//     const onNameChanged = () => {
//         console.log('name changed')
//     }
//
//     const focusLostHandler = () => {
//         console.log('focus lost')
//     }
//
//     return <div><textarea onChange={onNameChanged} onBlur={focusLostHandler}>Nick</textarea>
//         <button name='delete' onClick={deletedUser}>delete</button>
//         <button name='save' onClick={saveUser}>save</button>
//     </div>
//
// };

export const User = () => {
  const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {

    alert(event.currentTarget.name)
  }
  const saveUser = () => {
    alert('user have been saved')
  }

  const nameChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
    console.log('name changed: ' + event.currentTarget.value)
  }

  const ageChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('age changed: ' + event.currentTarget.value)
  }

  const focusLostHandler = () => {
    console.log('focus lost')
  }

  return (
      <div><textarea
          onChange={nameChanged}
          onBlur={focusLostHandler}
      >Nick
        </textarea>
        <input onChange={ageChanged} type="number"/>
        <button name='delete' onClick={deleteUser}>delete</button>

      </div>
  )
}

