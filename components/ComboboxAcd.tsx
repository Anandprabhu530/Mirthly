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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { analyze_data } from "@/utils/ai";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const FormSchema = z.object({
  Personality: z.string({
    required_error: "Please select a Personality.",
  }),
  Interest: z.string({
    required_error: "Please select a Interest.",
  }),
  WorkEnvironment: z.string({
    required_error: "Please select a Work Environment.",
  }),
});

export function ComboboxAcd({ setData, setLoading }: any) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true);
    const res = await analyze_data(data);
    setData(res);
    setLoading(false);
  };

  return (
    <div className="flex justify-center w-full">
      <Card className="w-full lg:w-fit">
        <CardHeader>
          <CardTitle>Fill the form</CardTitle>
          <CardDescription>Enter the below details </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="lg:w-[350px] space-y-2"
            >
              <FormField
                control={form.control}
                name="Personality"
                render={({ field }) => (
                  <div>
                    <FormItem>
                      <FormLabel>Personality</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Personality " />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Introverted">
                            Introverted
                          </SelectItem>
                          <SelectItem value="Extroverted">
                            Extroverted
                          </SelectItem>
                          <SelectItem value="Analytical">Analytical</SelectItem>
                          <SelectItem value="Detail-Oriented">
                            Detail-Oriented
                          </SelectItem>
                          <SelectItem value="Team-Player">
                            Team Player
                          </SelectItem>
                          <SelectItem value="Independent">
                            Independent
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="Interest"
                render={({ field }) => (
                  <div>
                    <FormItem className="pt-4">
                      <FormLabel>Interests</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Interest " />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Arts & Creativity">
                            Arts & Creativity
                          </SelectItem>
                          <SelectItem value="Business & Finance">
                            Business & Finance
                          </SelectItem>
                          <SelectItem value="Outdoors & Adventure">
                            Outdoors & Adventure
                          </SelectItem>
                          <SelectItem value="Science & Technology">
                            Science & Technology
                          </SelectItem>
                          <SelectItem value="Fitness & Wellness">
                            Fitness & Wellness
                          </SelectItem>
                          <SelectItem value="Gaming & Entertainment">
                            Gaming & Entertainment
                          </SelectItem>
                          <SelectItem value="History & Culture">
                            History & Culture
                          </SelectItem>
                          <SelectItem value="Social Justice & Advocacy">
                            Social Justice & Advocacy
                          </SelectItem>
                          <SelectItem value="Learning & Self-Improvement">
                            Learning & Self-Improvement
                          </SelectItem>
                          <SelectItem value="Making & Fixing Things">
                            Making & Fixing Things
                          </SelectItem>
                          <SelectItem value="Cooking & Food">
                            Cooking & Food
                          </SelectItem>
                          <SelectItem value="Fashion & Beauty">
                            Fashion & Beauty
                          </SelectItem>
                          <SelectItem value="Animals & Pets">
                            Animals & Pets
                          </SelectItem>
                          <SelectItem value="Music & Performing Arts">
                            Music & Performing Arts
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="WorkEnvironment"
                render={({ field }) => (
                  <div>
                    <FormItem className="pt-4 pb-8">
                      <FormLabel>Work Environment</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your prefered work Environment " />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Fast-paced">Fast-paced</SelectItem>
                          <SelectItem value="Steady-paced">
                            Steady-paced
                          </SelectItem>
                          <SelectItem value="Flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
              <div className="flex w-full justify-end">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
