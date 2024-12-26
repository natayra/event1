import React, { useState } from "react";
import { supabase } from "../supabase";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  Typography,
  Grid2,
  Chip,
  Box,
} from "@mui/material";
import TopBar from "./common/TopBar";
import { useForm } from "./hooks/useForm";
import Label from "./common/Label";
import { theme } from "../utils/theme";

const Register = () => {
  const { form, success, sendEmail } = useForm();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    profile_picture: "",
    pronouns: "",
    sexual_orientation: "",
    age_group: "",
    interested_genders: [],
    preferred_age_range: [],
    qualities: [],
    weekend_preference: "",
    lottery_choice: "",
    superpower_choice: "",
    pet_preference: "",
    party_vibe: "",
    vacation_type: "",
    partner_introversion: "",
    activity_level: "",
    fitness_importance: "",
    future_children: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("registrations") // Replace with your table name
      .insert([formData]);

    if (error) {
      console.error("Error inserting data:", error.message);
      alert("Failed to submit. Please try again.");
    } else {
      alert("Registration successful!");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        profile_picture: "",
        pronouns: "",
        sexual_orientation: "",
        age_group: "",
        interested_genders: [],
        preferred_age_range: [],
        qualities: [],
        weekend_preference: "",
        lottery_choice: "",
        superpower_choice: "",
        pet_preference: "",
        party_vibe: "",
        vacation_type: "",
        partner_introversion: "",
        activity_level: "",
        fitness_importance: "",
        future_children: "",
      });
    }
  };
  return (
    <Box>
      <TopBar />
      <form ref={form} onSubmit={sendEmail}>
        <Grid2
          container
          width="30%"
          flexDirection="column"
          justifyContent="center"
          rowGap="2rem"
          mt="6rem"
          ml="3%"
        >
          {/* First Name */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </Grid2>
          {/* Last Name */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </Grid2>
          {/* Email */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid2>

          {/* Phone Number */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </Grid2>

          {/* Profile Picture URL */}
          <Grid2 item xs={12} >
            <TextField
              fullWidth
              label="Profile Picture URL"
              name="profile_picture"
              value={formData.profile_picture}
              onChange={handleChange}
            />
          </Grid2>

          {/* Pronouns */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Pronouns"
              name="pronouns"
              value={formData.pronouns}
              onChange={handleChange}
            />
          </Grid2>

          {/* Age Group */}
          <Grid2 item xs={12}>
            <InputLabel>Age Group</InputLabel>
            <Select
              name="age_group"
              value={formData.age_group}
              onChange={handleChange}
            >
              <MenuItem value="18-25">18-25</MenuItem>
              <MenuItem value="26-35">26-35</MenuItem>
              <MenuItem value="36-45">36-45</MenuItem>
              <MenuItem value="46+">46+</MenuItem>
            </Select>
            <FormHelperText>Select your age group</FormHelperText>
          </Grid2>

          {/* Interested Genders */}
          <Grid2 item xs={12}>
            <InputLabel>Interested Genders</InputLabel>
            <Select
              multiple
              value={formData.interested_genders}
              onChange={(e) =>
                handleArrayChange("interested_genders", e.target.value)
              }
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              <MenuItem value="Men">Men</MenuItem>
              <MenuItem value="Women">Women</MenuItem>
              <MenuItem value="Non-binary">Non-binary</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            <FormHelperText>
              Select all genders you're interested in
            </FormHelperText>
          </Grid2>

          {/* Preferred Age Range */}
          <Grid2 item xs={12}>
            <InputLabel>Preferred Age Range</InputLabel>
            <Select
              multiple
              value={formData.preferred_age_range}
              onChange={(e) =>
                handleArrayChange("preferred_age_range", e.target.value)
              }
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              <MenuItem value="18-25">18-25</MenuItem>
              <MenuItem value="26-35">26-35</MenuItem>
              <MenuItem value="36-45">36-45</MenuItem>
              <MenuItem value="46+">46+</MenuItem>
            </Select>
            <FormHelperText>Select your preferred age ranges</FormHelperText>
          </Grid2>

          {/* Weekend Preference */}
          <Grid2 item xs={12}>
            <FormControl fullWidth required>
              <InputLabel>Weekend Preference</InputLabel>
              <Select
                name="weekend_preference"
                value={formData.weekend_preference}
                onChange={handleChange}
              >
                <MenuItem value="Netflix">Netflix</MenuItem>
                <MenuItem value="Nature">Nature</MenuItem>
                <MenuItem value="Party">Party</MenuItem>
                <MenuItem value="Exploring">Exploring</MenuItem>
              </Select>
            </FormControl>
          </Grid2>

          {/* Submit Button */}
          <Grid2 item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit Registration
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
};

export default Register;
