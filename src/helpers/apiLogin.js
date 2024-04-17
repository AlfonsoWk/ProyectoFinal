

export const authLogin = async ({email,password}) => {
   
   
    const response = await fetch(`${import.meta.env.VITE_BACK_URL}/auth/login?email=${email}&password=${password}`)

  const data =  await response.json()

  console.log("el resultado del login es: ", data)
  
  
  localStorage.setItem("token", JSON.stringify(data.token));
  return data.results
}


