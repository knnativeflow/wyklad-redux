// CONSTS
// v3
// const INCREMENT = 'exampleValue.INCREMENT'

// ACTION
// v2
// export const increment = (number = 1) => ({ type: 'increment', payload: number })
// v3
// export const increment = () => ({ type: INCREMENT })

// REDUCER
// v1
export const exampleValue = (state = 0, action) => {
  if (action.type === 'increment') {
    return state + 1;
  }

  return state;
}

// v2
// export const exampleValue = (state = 0, action) => {
//   if (action.type === 'increment') {
//     return state + action.payload;
//   }

//   return state;
// }

// v3
// export const exampleValue = (state = 0, action) => {
//   if (action.type === INCREMENT) {
//     return state + action.payload;
//   }

//   return state;
// }
