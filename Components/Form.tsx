"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

const fromSchema = z.object({
  userName: z
    .string({
      description: "Entrer votre nom ou de l'entreprise",
    })
    .min(2, {
      message: "Veuillez inserer votre nom ou le nom  de l'entrespris",
    }),
  email: z
    .string({
      description: "3",
    })
    .min(10, {
      message: "Veuillez inserer votre correct email",
    })
    .endsWith(".com", {
      message: "L'adresse mail valide il doit se termine avec .ma!!",
    }),
  messageMail: z
    .string({
      description: "Saisire votre message...",
    })
    .min(2, {
      message:
        "Vous devez saisir votre message pour notre equipe peuvent vous aidez",
    }),
});

export function InputForm() {
  // handler loading
  const [isLoading, SetLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      userName: "",
      email: "",
      messageMail: "",
    },
  });

  async function onSubmit(data: z.infer<typeof fromSchema>) {
    SetLoading(true);

    const username = data.userName;
    const email = data.email;
    const message = data.messageMail;

    try {
      const response = await fetch("/api/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      toast({
        variant: "default",
        title: `Monsieur  votre message est bien envoyer`,
        description: "Mail envoyer avec sucess",
      });
    } finally {
      toast({
        variant: "default",
        title: `Monsieur votre message est bien envoyer`,
        description: "Mail envoyer avec sucess",
      });
      SetLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="userName"
          defaultValue="test"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom : </FormLabel>
              <FormControl autoFocus>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Entrer votre nom ou de l&apos;entreprise
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse mail : </FormLabel>
              <FormControl>
                <Input placeholder={field.value} {...field} />
              </FormControl>
              <FormDescription>Saisir votre email professionel</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="messageMail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message : </FormLabel>
              <FormControl>
                <Textarea placeholder={field.value} {...field} rows={10} />
              </FormControl>
              <FormDescription>Saisire votre message...</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full text-center">
          <Button type="submit">{isLoading ? "loading..." : "Envoyer"}</Button>
        </div>
      </form>
    </Form>
  );
}
