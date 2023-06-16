import React from "react";

import { Controller, useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import Layout from "@/components/Layout";
import UploadImage from "@/components/UploadImage";

import {
  Box,
  Button,
  Chip,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { ProductDTO } from "@/types/dtos/product.dto";

const sizes: string[] = [
  "EU-38",
  "EU-39",
  "EU-40",
  "EU-41",
  "EU-42",
  "EU-43",
  "EU-44",
];

export default function New() {
  const [selectedImages, setSelectedImages] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleImageUpload = (key: number, imageUrl: string = ""): void => {
    // setSelectedImages((prevSelectedImages: string[]) => {
    //   console.log("prevSelectedImages", selectedImages);

    //   // Remove the old image URL if it exists
    //   const updatedImages = prevSelectedImages.filter(
    //     (image: string) => image !== imageUrl
    //   );
    //   // Add the new image URL
    //   return [...updatedImages, imageUrl];
    // });

    const updatedImagePaths = [...selectedImages];
    updatedImagePaths[key] = imageUrl;
    setSelectedImages(updatedImagePaths);
  };

  const resolver = classValidatorResolver(ProductDTO);
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      product_name: "",
      category: 1,
      gender: 1,
      brand: 1,
      description: "",
      productimg_list: [],
      size_list: ["EU-38"],
      amount: 1,
    },
    resolver,
  });

  const handleRequest = handleSubmit((value) => {
    console.log(value);
    console.log("selectedImages", selectedImages);

    reset();
  });

  return (
    <Layout>
      <div className="grid gap-2 lg:gap-[20px] lg:grid-cols-5 text-xs lg:text-base ">
        <div className="w-full h-auto lg:col-span-2">
          <div className="grid">
            <span className="mb-2 font-bold">Product Name</span>
            <Controller
              name="product_name"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  size="small"
                  fullWidth
                  value={value}
                  onChange={(data) => onChange(data)}
                  error={!!errors.product_name}
                  helperText={errors.product_name?.message}
                />
              )}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-[10px] mt-2">
            <div className="grid col-span-1 sm:col-span-2">
              <span className="mb-2 font-bold">Category</span>
              <Controller
                name="category"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    select
                    fullWidth
                    size="small"
                    value={value}
                    onChange={(data) => onChange(data)}
                  >
                    <MenuItem key={1} value={1}>
                      <span className="text-sm font-medium lg:text-base font-quicksand">
                        a
                      </span>
                    </MenuItem>
                    <MenuItem key={2} value={2}>
                      <span className="text-sm font-medium font-quicksand lg:text-base">
                        b
                      </span>
                    </MenuItem>
                  </TextField>
                )}
              />
            </div>

            <div className="grid col-span-1">
              <span className="mb-2 font-bold">Gender</span>
              <Controller
                name="gender"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    select
                    fullWidth
                    size="small"
                    value={value}
                    onChange={(data) => onChange(data)}
                  >
                    <MenuItem key={1} value={1}>
                      <span className="text-sm font-medium font-quicksand lg:text-base">
                        Male
                      </span>
                    </MenuItem>
                    <MenuItem key={2} value={2}>
                      <span className="text-sm font-medium font-quicksand lg:text-base">
                        Female
                      </span>
                    </MenuItem>
                    <MenuItem key={3} value={3}>
                      <span className="text-sm font-medium font-quicksand">
                        Other
                      </span>
                    </MenuItem>
                  </TextField>
                )}
              />
            </div>
          </div>

          <div className="grid mt-2">
            <span className="mb-2 font-bold">Brand</span>
            <Controller
              name="brand"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  select
                  fullWidth
                  size="small"
                  defaultValue={1}
                  value={value}
                  onChange={(data) => onChange(data)}
                >
                  <MenuItem key={1} value={1}>
                    <span className="text-sm font-medium font-quicksand lg:text-base">
                      a
                    </span>
                  </MenuItem>
                  <MenuItem key={2} value={2}>
                    <span className="text-sm font-medium font-quicksand lg:text-base">
                      b
                    </span>
                  </MenuItem>
                </TextField>
              )}
            />
          </div>

          <div className="grid mt-2">
            <span className="mb-2 font-bold">Description</span>
            <Controller
              name="description"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  fullWidth
                  size="small"
                  multiline
                  rows={4}
                  value={value}
                  onChange={(data) => onChange(data)}
                />
              )}
            />
          </div>
        </div>

        <div className="w-full h-auto lg:col-span-3">
          <div className="grid">
            <span className="mb-2 font-bold">Product Images</span>
            <Controller
              name="productimg_list"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Box onChange={(data) => onChange(data)}>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <UploadImage
                        index={0}
                        onImageUpload={handleImageUpload}
                      />
                    </div>

                    <div className="grid grid-rows-2 gap-2 sm:col-span-1">
                      <div className="grid grid-cols-2 row-span-1 gap-2">
                        <div>
                          <UploadImage
                            index={1}
                            className="text-xs 2xl:text-sm"
                            onImageUpload={handleImageUpload}
                          />
                        </div>
                        <div>
                          <UploadImage
                            index={2}
                            className="text-xs 2xl:text-sm"
                            onImageUpload={handleImageUpload}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 row-span-1 gap-2">
                        <div>
                          <UploadImage
                            index={3}
                            className="text-xs 2xl:text-sm"
                            onImageUpload={handleImageUpload}
                          />
                        </div>
                        <div>
                          <UploadImage
                            index={4}
                            className="text-xs 2xl:text-sm"
                            onImageUpload={handleImageUpload}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
              )}
            />
          </div>

          <div className="grid grid-cols-3 mt-2 gap-[10px]">
            <div className="grid col-span-2">
              <span className="mb-2 font-bold">Add Size</span>
              <Controller
                name="size_list"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    id="demo-multiple-chip"
                    multiple
                    size="small"
                    value={value}
                    onChange={(data) => {
                      if (data.target.value.length > 0) {
                        onChange(data);
                      }
                    }}
                    input={<OutlinedInput id="select-multiple-chip" />}
                    renderValue={(selected) => (
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                        }}
                      >
                        {selected.map((value) => (
                          <Chip
                            key={value}
                            label={value}
                            size="small"
                            className="font-medium font-quicksand"
                          />
                        ))}
                      </Box>
                    )}
                    //MenuProps={MenuProps}
                  >
                    {sizes.map((size) => (
                      <MenuItem key={size} value={size} className="text-sm">
                        {size}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </div>

            <div className="grid col-span-1">
              <span className="mb-2 font-bold">Amount</span>
              <Controller
                name="amount"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    size="small"
                    type="number"
                    InputProps={{
                      inputProps: { min: 1 },
                    }}
                    value={value}
                    onChange={(data) => {
                      const intData = parseInt(data.target.value);
                      onChange(intData);
                    }}
                  />
                )}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-6">
            <Button
              variant="contained"
              onClick={handleRequest}
              className="bg-blue-500 "
            >
              Save
            </Button>
            <Button variant="outlined">Cancel</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
