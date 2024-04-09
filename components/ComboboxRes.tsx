"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  Fullname: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
  Email: z.string().email({
    message: "Please enter Email Address",
  }),
  Number: z.string().min(10, {
    message: "Please enter Mobile Number",
  }),
  Education: z.string().min(5, {
    message: "Please enter Education details",
  }),
  Education_From: z.string().min(4, {
    message: "Please Enter From detail",
  }),
  Education_To: z.string().min(4, {
    message: "Please Enter To detail",
  }),
  Location: z.string(),
  Experience_From: z.string(),
  Experience_To: z.string(),
  Experience_Company: z.string(),
  Experience_Description: z.string(),
});

export function ComboboxRes() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Fullname: "",
      Email: "",
      Number: "",
      Education: "",
      Education_From: "",
      Education_To: "",
      Location: "",
      Experience_Description: "",
      Experience_From: "",
      Experience_Company: "",
      Experience_To: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 "
      >
        <div className="flex flex-col gap-6">
          <div className="flex gap-8">
            <div className="basis-1/2">
              <FormField
                control={form.control}
                name="Fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe  " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="basis-1/2">
              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe@xyz.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="basis-1/2">
              <FormField
                control={form.control}
                name="Number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="basis-1/2">
              <FormField
                control={form.control}
                name="Location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="New York" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>Education Details</div>
            <FormField
              control={form.control}
              name="Education"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-8">
              <div className="basis-1/2">
                <FormField
                  control={form.control}
                  name="Education_From"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>From *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="basis-1/2">
                <FormField
                  control={form.control}
                  name="Education_To"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>To *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>Experience Details</div>
            <FormField
              control={form.control}
              name="Experience_Company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Previous Employer Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-8">
              <div className="basis-1/2">
                <FormField
                  control={form.control}
                  name="Experience_From"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>From</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="basis-1/2">
                <FormField
                  control={form.control}
                  name="Experience_To"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>To</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="Experience_Description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
