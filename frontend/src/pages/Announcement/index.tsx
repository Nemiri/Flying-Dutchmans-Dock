import { format, parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
import api from '../../api/api';

import {Container, Status, StatusContainer, Table} from './styles'

interface Announcement {
  ship_name: string;
  ship_captain: string;
  arrival_time: string;
  departure_time: string;
}

const Announcements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])

  useEffect(() => {
    api.get('announcement').then((response) => {
      setAnnouncements(response.data.map((element: Announcement) => {
        if (!element.arrival_time) return {
            ...element,
            departure_time: format(parseISO(element.departure_time), "dd/MM/yyyy")
        }
        
        if (!element.departure_time) return {
          ...element,
          arrival_time: format(parseISO(element.arrival_time), "dd/MM/yyyy"),
        }
        
        return {
          ...element,
          arrival_time: format(parseISO(element.arrival_time), "dd/MM/yyyy"),
          departure_time: format(parseISO(element.departure_time), "dd/MM/yyyy")
        }
      }))
    })
  })

  return (
    <Container>
      <h2>Anúncios</h2>
      <StatusContainer>
        <Status>
          <p>Total</p>
          <h1>24</h1>
        </Status>
        <Status>
          <p>Partindo</p>
          <h1>24</h1>
        </Status>
        <Status>
          <p>Ancorado</p>
          <h1>24</h1>
        </Status>
        <Status>
          <p>Em Rota</p>
          <h1>24</h1>
        </Status>
      </StatusContainer>
      <Table>
        <h2>Situação dos Navios</h2>
        {announcements.map(announcement => {
          return (
            <>
              <div id="data">
                <div>
                  {announcement.arrival_time ? <h3>Ancorado</h3> : <h3>Em Rota</h3>}
                  <p>{announcement.ship_name}</p>
                </div>
                {announcement.departure_time ? <p>Partirá em {announcement.departure_time}</p> : <p>Ancorou em {announcement.arrival_time}</p>}
              </div>
              <hr/>
            </>
          )
        })}
      </Table>
    </Container>
  )
}

export default Announcements