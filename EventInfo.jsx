import React from 'react'
import { Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import EventInfocss from './EventInfocss'
import  Icon  from 'react-native-vector-icons/FontAwesome'
function EventInfo() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={EventInfocss.Pagecss}>
                    <View style={EventInfocss.container}>
                    <Text style={EventInfocss.Events}>Events</Text>                    
                    </View>
                    <View style={EventInfocss.Image1}>

                    </View>
                    <View style={EventInfocss.container}>
                        <View>
                            <Text style={EventInfocss.EventName}>Event Name</Text>
                            <Text style={EventInfocss.ClubName}>Club Name</Text>
                        </View>

                        <View>
                            <TouchableOpacity style={EventInfocss.Brochure}><Text style={EventInfocss.ButtonText}>Download Brochure</Text></TouchableOpacity>

                        </View>
                    </View>
                    <View style={EventInfocss.container}>
                        <View>
                            
                            <Text style={EventInfocss.date1}><Icon name="calendar" size={15} color="white"/> Date</Text>
                            <Text style={EventInfocss.ClubName}>Dec 29 2022</Text>
                        </View>

                        <View style={EventInfocss.time}>
                            <Text style={EventInfocss.date1}><Icon name="clock-o" size={15} color="white"/>Time</Text>
                            <Text style={EventInfocss.ClubName}>4:00PM</Text>
                        </View>
                    </View>
                    <View style={EventInfocss.container}>
                        <View>
                            <Text style={EventInfocss.date1}><Icon name="map-marker" size={15} color="white"/>Venue</Text>
                            <Text style={EventInfocss.ClubName}>Amphitheatere</Text>
                        </View>

                        <View>
                            <Text style={EventInfocss.date1}>Event Duration</Text>
                            <Text style={EventInfocss.ClubName}>3 Hours</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={EventInfocss.date1}><Icon name="rupee" size={15} color="white"/>Price per head</Text>
                        <Text style={EventInfocss.ClubName}>Rs.500</Text>
                    </View>
                    <View>
                        <Text style={EventInfocss.date1}>Description</Text>
                        <Text style={EventInfocss.ClubName}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta,
                            vero veniam accusamus incidunt facilis voluptatum laboriosam doloremque nemo
                            laborum deleniti dolore perspiciatis. Excepturi consequatur quidem officiis
                            voluptatibus deserunt dolore?</Text>
                    </View>
                    <View>
                        <Text style={EventInfocss.date1}>Student Coordinator</Text>
                        <Text style={EventInfocss.ClubName}>Akshath singh</Text>
                    </View>
                    <View>
                        <Text style={EventInfocss.date1}>Faculty Coordinator</Text>
                        <Text style={EventInfocss.ClubName}>Dr.Hasmanth Pal</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={EventInfocss.RegisterButton}><Text style={EventInfocss.Registerhere}>Register here</Text></TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>


    )
}

export default EventInfo