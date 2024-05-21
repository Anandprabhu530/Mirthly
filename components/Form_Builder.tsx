"use client";
import * as React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { set, z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
  Degree: z.string().min(5, {
    message: "Please Enter your Degree Details",
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
  project1: z.string(),
  Project1_Description: z.string(),
  project2: z.string(),
  Experience_Role: z.string(),
  Project2_Description: z.string(),
});

export function Form_Builder({ setData, data, setsubmitted }: any) {
  const [formnumber, setFormnumber] = React.useState(0);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Fullname: "",
      Email: "",
      Number: "",
      Education: "",
      Degree: "",
      Education_From: "",
      Education_To: "",
      Location: "",
      Experience_Role: "",
      Experience_Description: "",
      Experience_From: "",
      Experience_Company: "",
      Experience_To: "",
      project1: "",
      Project1_Description: "",
      project2: "",
      Project2_Description: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setsubmitted(true);
  }

  const handleChange = (event: any) => {
    event.preventDefault();
    setData((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Card className="w-full lg:w-fit">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="sm:w-full">
          <CardHeader>
            <CardTitle>Fill the form</CardTitle>
            <CardDescription>Enter the below details </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              {/* Personel Details */}
              <div
                className={cn("flex flex-col gap-4 lg:w-[450px] w-full", {
                  hidden: formnumber !== 0,
                })}
              >
                <FormField
                  control={form.control}
                  name="Fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe  "
                          {...field}
                          onChange={handleChange}
                          value={data.Fullname}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="johndoe@xyz.com"
                          {...field}
                          onChange={handleChange}
                          value={data.Email}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number *</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          onChange={handleChange}
                          value={data.Number}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="New York"
                          {...field}
                          onChange={handleChange}
                          value={data.Location}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Education Details */}
              <div
                className={cn("flex flex-col gap-4", {
                  hidden: formnumber !== 1,
                })}
              >
                <div className="text-xl font-semibold">Education Details</div>
                <FormField
                  control={form.control}
                  name="Education"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Institution *</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          onChange={handleChange}
                          value={data.Education}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Degree"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Degree *</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          onChange={handleChange}
                          value={data.Degree}
                        />
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
                            <Input
                              {...field}
                              onChange={handleChange}
                              value={data.Education_From}
                            />
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
                            <Input
                              {...field}
                              onChange={handleChange}
                              value={data.Education_To}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Experience Details */}
              <div
                className={cn("flex flex-col gap-4", {
                  hidden: formnumber !== 2,
                })}
              >
                <div className="text-xl font-semibold">
                  Experience (If Applicable)
                </div>
                <FormField
                  control={form.control}
                  name="Experience_Company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Previous Employer Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          onChange={handleChange}
                          value={data.Experience_Company}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Experience_Role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Previous Role Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          onChange={handleChange}
                          value={data.Experience_Role}
                        />
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
                            <Input
                              {...field}
                              onChange={handleChange}
                              value={data.Experience_From}
                            />
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
                            <Input
                              {...field}
                              onChange={handleChange}
                              value={data.Experience_To}
                            />
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
                        <Textarea
                          {...field}
                          onChange={handleChange}
                          value={data.Experience_Description}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Project Detials */}
              <div
                className={cn("flex flex-col gap-4 lg:w-[450px]", {
                  hidden: formnumber !== 3,
                })}
              >
                <div className="text-xl font-semibold">Projects</div>
                <FormField
                  control={form.control}
                  name="project1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project-1 Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe  "
                          {...field}
                          onChange={handleChange}
                          value={data.project1}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Project1_Description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project-1 Description</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          onChange={handleChange}
                          value={data.Project1_Description}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="project2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project-2 Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe  "
                          {...field}
                          onChange={handleChange}
                          value={data.project2}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Project2_Description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project-2 Description</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          onChange={handleChange}
                          value={data.Project2_Description}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-6">
            <div className="flex justify-between w-full">
              <Button
                variant="ghost"
                className={cn({ hidden: formnumber === 0 })}
                onClick={(event) => {
                  event.preventDefault();
                  setFormnumber(formnumber - 1);
                }}
              >
                <ArrowLeft />
                Back
              </Button>

              <Button
                variant="ghost"
                className={cn({ hidden: formnumber === 3 })}
                onClick={(event) => {
                  event.preventDefault();
                  if (formnumber === 0) {
                    form.trigger(["Fullname", "Email", "Number"]);
                    if (
                      data.Fullname.length === 0 ||
                      data.Email.length === 0 ||
                      data.Number.length === 0
                    ) {
                      return;
                    }
                  } else if (formnumber === 1) {
                    form.trigger([
                      "Education",
                      "Degree",
                      "Education_From",
                      "Education_To",
                    ]);
                    if (
                      data.Education.length === 0 ||
                      data.Degree.length === 0 ||
                      data.Education_From.length === 0 ||
                      data.Education_To === 0
                    ) {
                      return;
                    }
                  }
                  setFormnumber(formnumber + 1);
                }}
              >
                <ArrowRight />
                Next
              </Button>

              <Button
                type="submit"
                //@ts-ignore
                onClick={onSubmit}
                className={cn({ hidden: formnumber !== 3 })}
              >
                Download PDF
              </Button>
            </div>
            <div className="lg:hidden">Scroll Below for preview</div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
