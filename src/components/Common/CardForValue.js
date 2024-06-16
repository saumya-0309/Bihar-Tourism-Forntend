import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export function Budget({title, diff, trend, sx, value , icon }) {

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.primary" variant="overline">
                {title}
              </Typography>
              <Typography variant="h4">{value}</Typography>
            </Stack>
            <Avatar sx={{color:'black' , background:'none'}}>
            <i className={icon}/>
            </Avatar>
          </Stack>
          {diff ? (
            <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
              <Stack sx={{ alignItems: 'center' }} direction="row" spacing={0.5}>
                {trend === 'up' ? <i class="fas fa-arrow-up"/> : <i class="fas fa-arrow-down"/>}
                <Typography color={'black'} variant="body2">
                  {diff}%
                </Typography>
              </Stack>
              <Typography color="text.primary" variant="caption">
                Since last month
              </Typography>
            </Stack>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
}