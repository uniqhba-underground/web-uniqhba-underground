## Certificate Policy

### Certificate ID

Certificate ID structure separated to a few part
- Year: `YYYY`, e.g `2025`
- Separator: `X`
- Month of event: `MM`, e.g `05` (May)
- Type of event: `T`, e.g 
  - `M` for Meetup
  - `MC` for Mini Class
  - `W` for Workshop
  - `WB` for Webinar
  - `O` for Others
- Event number (in order)
- Participant number (in order)

So, the final combination will be `YYYYXMMDDTIONU`, for example `2025X0614M0101`, this means:
- Year 2025
- Month 06 (June)
- Day 14 of month 06
- Event type is Meetup
- Event number 01 (1st event) of event type
- Participant number 01