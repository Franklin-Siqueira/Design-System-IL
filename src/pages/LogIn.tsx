// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import axios from "axios";
//
import { Logo } from "../assets/img/Logo";
import { Button } from "../components/Button";
import { CheckBox } from "../components/CheckBox";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";

export function LogIn() {
  const [isLogged, setIsLogged] = useState(false)

  async function handleLogin(e: FormEvent) {
    e.preventDefault()
    //
    await axios.post('/sessions', {
      email: 'franklinsiqueira@yahoo.com',
      password: '12345678',
    })
    setIsLogged(true)
  }
  //
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      {/* Header */}
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Franklin | Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Login to begin the show!
        </Text>
      </header>
      {/* Form */}
      <form onSubmit={handleLogin} className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        { isLogged && <Text>Log in Success!</Text>}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Your e-mail address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type="email" id="email" placeholder="Type your e-mail address here..." />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Your password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input type="password" id="password" placeholder="********" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <CheckBox id="remember" />
          <Text size="sm" className="text-gray-200">Remember me for 30 days</Text>
        </label>
        {/* Button */}
        <Button type="submit" className="mt-4">Access Platform</Button>
      </form>
      {/* Footer  */}
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">Forgot Password?</a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">First time here? Register NOW!</a>
        </Text>
      </footer>
    </div>
  )
}