import React, { useState } from "react";
import { supabase } from "../supabase"; // import your supabase client

import {
  Container,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid2,
  Typography,
  Chip,
} from "@mui/material";

const Register = () => {
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
      .from("countries")
      .insert({
        first_name: "test",
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
      })
      .select();
  };

  console.log(formData);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Registration Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={3}>
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

          {/* Profile Picture */}
          <Grid2 item xs={12}>
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

          {/* Sexual Orientation */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Sexual Orientation"
              name="sexual_orientation"
              value={formData.sexual_orientation}
              onChange={handleChange}
            />
          </Grid2>

          {/* Age Group */}
          <Grid2 item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Age Group</InputLabel>
              <Select
                name="age_group"
                value={formData.age_group}
                onChange={handleChange}
                required
              >
                <MenuItem value="18-25">18-25</MenuItem>
                <MenuItem value="26-35">26-35</MenuItem>
                <MenuItem value="36-45">36-45</MenuItem>
                <MenuItem value="46+">46+</MenuItem>
              </Select>
            </FormControl>
          </Grid2>

          {/* Interested Genders */}
          <Grid2 item xs={12}>
            <FormControl fullWidth>
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
            </FormControl>
          </Grid2>

          {/* Preferred Age Range */}
          <Grid2 item xs={12}>
            <FormControl fullWidth>
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
            </FormControl>
          </Grid2>

          {/* Qualities */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Qualities (comma-separated)"
              name="qualities"
              value={formData.qualities}
              onChange={(e) =>
                handleArrayChange(
                  "qualities",
                  e.target.value.split(",").map((item) => item.trim())
                )
              }
              required
            />
          </Grid2>

          {/* Weekend Preference */}
          <Grid2 item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Weekend Preference</InputLabel>
              <Select
                name="weekend_preference"
                value={formData.weekend_preference}
                onChange={handleChange}
                required
              >
                <MenuItem value="Netflix">Netflix</MenuItem>
                <MenuItem value="Nature">Nature</MenuItem>
                <MenuItem value="Party">Party</MenuItem>
                <MenuItem value="Exploring">Exploring</MenuItem>
              </Select>
            </FormControl>
          </Grid2>

          {/* Lottery Choice */}
          <Grid2 item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Lottery Choice</InputLabel>
              <Select
                name="lottery_choice"
                value={formData.lottery_choice}
                onChange={handleChange}
                required
              >
                <MenuItem value="Vacation">Vacation</MenuItem>
                <MenuItem value="Charity">Charity</MenuItem>
                <MenuItem value="Invest">Invest</MenuItem>
                <MenuItem value="Party">Party</MenuItem>
              </Select>
            </FormControl>
          </Grid2>

          {/* Superpower Choice */}
          <Grid2 item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Superpower Choice</InputLabel>
              <Select
                name="superpower_choice"
                value={formData.superpower_choice}
                onChange={handleChange}
                required
              >
                <MenuItem value="Invisibility">Invisibility</MenuItem>
                <MenuItem value="Time Travel">Time Travel</MenuItem>
                <MenuItem value="Mind Reading">Mind Reading</MenuItem>
                <MenuItem value="Flying">Flying</MenuItem>
              </Select>
            </FormControl>
          </Grid2>

          {/* Pet Preference */}
          <Grid2 item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Pet Preference</InputLabel>
              <Select
                name="pet_preference"
                value={formData.pet_preference}
                onChange={handleChange}
                required
              >
                <MenuItem value="Dogs">Dogs</MenuItem>
                <MenuItem value="Cats">Cats</MenuItem>
                <MenuItem value="Both">Both</MenuItem>
                <MenuItem value="Neither">Neither</MenuItem>
              </Select>
            </FormControl>
          </Grid2>

          {/* Party Vibe */}
          <Grid2 item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Party Vibe</InputLabel>
              <Select
                name="party_vibe"
                value={formData.party_vibe}
                onChange={handleChange}
                required
              >
                <MenuItem value="Life of the party">Life of the party</MenuItem>
                <MenuItem value="Casual mingler">Casual mingler</MenuItem>
                <MenuItem value="Quiet observer">Quiet observer</MenuItem>
                <MenuItem value="DJ or organizer">DJ or organizer</MenuItem>
              </Select>
            </FormControl>
          </Grid2>

          {/* Vacation Type */}
          <Grid2 item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Vacation Type</InputLabel>
              <Select
                name="vacation_type"
                value={formData.vacation_type}
                onChange={handleChange}
                required
              >
                <MenuItem value="Beach">Beach</MenuItem>
                <MenuItem value="Mountains">Mountains</MenuItem>
                <MenuItem value="City">City</MenuItem>
                <MenuItem value="Countryside">Countryside</MenuItem>
              </Select>
            </FormControl>
          </Grid2>

          {/* Partner Introversion */}
          <Grid2 item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Partner Introversion</InputLabel>
              <Select
                name="partner_introversion"
                value={formData.partner_introversion}
                onChange={handleChange}
                required
              >
                <MenuItem value="Introverted">Introverted</MenuItem>
                <MenuItem value="Extroverted">Extroverted</MenuItem>
                <MenuItem value="Either">Either</MenuItem>
              </Select>
            </FormControl>
          </Grid2>

          {/* Activity Level */}
          <Grid2 item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Activity Level</InputLabel>
              <Select
                name="activity_level"
                value={formData.activity_level}
                onChange={handleChange}
                required
              >
                <MenuItem value="Early Bird">Early Bird</MenuItem>
                <MenuItem value="Night Owl">Night Owl</MenuItem>
              </Select>
            </FormControl>
          </Grid2>

          {/* Fitness Importance */}
          <Grid2 item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Fitness Importance</InputLabel>
              <Select
                name="fitness_importance"
                value={formData.fitness_importance}
                onChange={handleChange}
                required
              >
                <MenuItem value="Very important">Very important</MenuItem>
                <MenuItem value="Somewhat important">
                  Somewhat important
                </MenuItem>
                <MenuItem value="Not very important">
                  Not very important
                </MenuItem>
              </Select>
            </FormControl>
          </Grid2>

          {/* Future Children */}
          <Grid2 item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Future Children</InputLabel>
              <Select
                name="future_children"
                value={formData.future_children}
                onChange={handleChange}
                required
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
                <MenuItem value="Unsure">Unsure</MenuItem>
              </Select>
            </FormControl>
          </Grid2>

          {/* Submit Button */}
          <Grid2 item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Container>
  );
};

export default Register;
