var EPLClubs = {Clubs:[{Club:"AFC Bournemouth", Stadium:"Dean Court", Capacity:"11,464", Manager:"Eddie Howe", Captain:"Tommy Elphick"}, {Club:"Arsenal", Stadium:"Emirates Stadium", Capacity:"60,260", Manager:"Arsene Wenger", Captain:"Mikel Arteta"}, {Club:"Aston Villa", Stadium:"Villa Park", Capacity:"42,660", Manager:"Tim Sherwood", Captain:"Micah Richards"}, {Club:"Chelsea", Stadium:"Stamford Bridge", Capacity:"41,798", Manager:"Jose Mourinho", Captain:"John Terry"}, {Club:"Crystal Palace", Stadium:"Selhurst Park", 
Capacity:"25,073", Manager:"Alan Pardew", Captain:"Mile Jedinak"}, {Club:"Everton", Stadium:"Goodison Park", Capacity:"39,571", Manager:"Roberto Martinez", Captain:"Phil Jagielka"}, {Club:"Leicester City", Stadium:"King Power Stadium", Capacity:"32,312", Manager:"Claudio Ranieri", Captain:"Wes Morgan"}, {Club:"Liverpool", Stadium:"Anfield", Capacity:"44,742", Manager:"Jurgen Klopp", Captain:"Jordan Henderson"}, {Club:"Manchester City", Stadium:"Etihad Stadium", Capacity:"55,097", Manager:"Manuel Pellegrini", 
Captain:"Vincent Kompany"}, {Club:"Manchester United", Stadium:"Old Trafford", Capacity:"75,653", Manager:"Louis van Gaal", Captain:"Wayne Rooney"}, {Club:"Newcastle United", Stadium:"St James' Park", Capacity:"52,338", Manager:"Steve McClaren", Captain:"Fabricio Coloccini"}, {Club:"Norwich City", Stadium:"Carrow Road", Capacity:"27,010", Manager:"Alex Neil", Captain:"Russell Martin"}, {Club:"Southampton", Stadium:"St Mary's Stadium", Capacity:"32,505", Manager:"Ronald Koeman", Captain:"Jose Fonte"}, 
{Club:"Stoke City", Stadium:"Britannia Stadium", Capacity:"27,740", Manager:"Mark Hughes", Captain:"Ryan Shawcross"}, {Club:"Sunderland", Stadium:"Stadium of Light", Capacity:"48,707", Manager:"Sam Allardyce", Captain:"John O'Shea"}, {Club:"Swansea City", Stadium:"Liberty Stadium", Capacity:"20,909", Manager:"Garry Monk", Captain:"Ashley Williams"}, {Club:"Tottenham Hotspur", Stadium:"White Hart Lane", Capacity:"36,284", Manager:"Mauricio Pochettino", Captain:"Hugo Lloris"}, {Club:"Watford", Stadium:"Vicarage Road", 
Capacity:"21,500", Manager:"Quique Flores", Captain:"Troy Deeney"}, {Club:"West Bromwich Albion", Stadium:"The Hawthorns", Capacity:"26,850", Manager:"Tony Pulis", Captain:"Darren Fletcher"}, {Club:"West Ham United", Stadium:"Boleyn Ground", Capacity:"35,345", Manager:"Slaven Bilic", Captain:"Mark Noble"}]};
(function() {
  var c = document.getElementById("Clubs");
  for (i = 0;i < EPLClubs.Clubs.length;i++) {
    var b = document.createElement("Clubs"), a = document.createElement("h2");
    a.textContent = EPLClubs.Clubs[i].club;
    b.appendChild(a);
    a = document.createElement("h3");
    a.textContent = EPLClubs.Clubs[i].stadium;
    b.appendChild(a);
    a = document.createElement("h3");
    a.textContent = EPLClubs.Clubs[i].Capacity;
    b.appendChild(a);
    a = document.createElement("h3");
    a.textContent = EPLClubs.Clubs[i].Manager;
    b.appendChild(a);
    a = document.createElement("h3");
    a.textContent = EPLClubs.Clubs[i].Captain;
    b.appendChild(a);
    c.appendChild(b);
  }
})();