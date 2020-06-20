/**
  Generated Main Source File

  Company:
    Microchip Technology Inc.

  File Name:
    main.c

  Summary:
    This is the main file generated using MPLAB(c) Code Configurator

  Description:
    This header file provides implementations for driver APIs for all modules selected in the GUI.
    Generation Information :
        Product Revision  :  MPLAB(c) Code Configurator - 3.15.0
        Device            :  PIC18F4550
        Driver Version    :  2.00
    The generated drivers are tested against the following:
        Compiler          :  XC8 1.35
        MPLAB             :  MPLAB X 3.20
*/

/*
    (c) 2016 Microchip Technology Inc. and its subsidiaries. You may use this
    software and any derivatives exclusively with Microchip products.

    THIS SOFTWARE IS SUPPLIED BY MICROCHIP "AS IS". NO WARRANTIES, WHETHER
    EXPRESS, IMPLIED OR STATUTORY, APPLY TO THIS SOFTWARE, INCLUDING ANY IMPLIED
    WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY, AND FITNESS FOR A
    PARTICULAR PURPOSE, OR ITS INTERACTION WITH MICROCHIP PRODUCTS, COMBINATION
    WITH ANY OTHER PRODUCTS, OR USE IN ANY APPLICATION.

    IN NO EVENT WILL MICROCHIP BE LIABLE FOR ANY INDIRECT, SPECIAL, PUNITIVE,
    INCIDENTAL OR CONSEQUENTIAL LOSS, DAMAGE, COST OR EXPENSE OF ANY KIND
    WHATSOEVER RELATED TO THE SOFTWARE, HOWEVER CAUSED, EVEN IF MICROCHIP HAS
    BEEN ADVISED OF THE POSSIBILITY OR THE DAMAGES ARE FORESEEABLE. TO THE
    FULLEST EXTENT ALLOWED BY LAW, MICROCHIP'S TOTAL LIABILITY ON ALL CLAIMS IN
    ANY WAY RELATED TO THIS SOFTWARE WILL NOT EXCEED THE AMOUNT OF FEES, IF ANY,
    THAT YOU HAVE PAID DIRECTLY TO MICROCHIP FOR THIS SOFTWARE.

    MICROCHIP PROVIDES THIS SOFTWARE CONDITIONALLY UPON YOUR ACCEPTANCE OF THESE
    TERMS.
*/

#include "mcc.h"
#include "stdio.h"
#include "stdlib.h"
#include <xlcd.h>

/*
                         Main application
 */
unsigned char myKey, number1, number2, result;
unsigned char nums[10];
unsigned char buffer[10];

void main(void)
{
    // Initialize the device
    SYSTEM_Initialize();
    
    
    // Enable the Global Interrupts
    //INTERRUPT_GlobalInterruptEnable();

    // Enable the Peripheral Interrupts
    //INTERRUPT_PeripheralInterruptEnable();

    // Disable the Global Interrupts
    //INTERRUPT_GlobalInterruptDisable();

    // Disable the Peripheral Interrupts
    //INTERRUPT_PeripheralInterruptDisable();
    
    
    while (1)
    {
        // WELCOME BANNER
        while(BusyXLCD());
        putrsXLCD("*ELECT SAFE*");
        while(BusyXLCD());
        WriteCmdXLCD(0xC0);
        putrsXLCD("Enter password");
        
        while(BusyXLCD());
        WriteCmdXLCD(0b00000001);
        
        
        //get first number
        do{
            myKey = GetKey_sim();
            if (myKey != '*') {
                while(BusyXLCD());
                WriteDataXLCD(myKey);
            }
        }while(myKey != '*');//while(myKey > '9' || myKey < '0');
        
        // clear display
        /*while(BusyXLCD());
        WriteCmdXLCD(0b00000001);*/

            while(BusyXLCD());
            WriteDataXLCD(myKey-'0');
        //}
        /*
        while(BusyXLCD());
        WriteCmdXLCD(0xC0);
        putrsXLCD("HEY");
        */
        // get second number
        do{
            myKey = GetKey_sim();
        }while(myKey > '9' || myKey < '0');
        //print number and save it
        number2 = myKey - '0';
        while(BusyXLCD());
        WriteDataXLCD(myKey);
        while(BusyXLCD());
        putrsXLCD("=");
        //wait for key #
        do{
            myKey = GetKey_sim();
        }while(myKey != '#');
        //print result in bottom row
        while(BusyXLCD());
        SetDDRamAddr(0x40);
        result = number1+number2;
        sprintf(buffer, "%d  Press C", result);
        while(BusyXLCD());
        putsXLCD(buffer);
        //wait for key C
        do{
            myKey = GetKey_sim();
        }while(myKey != 'C');
        //clear display
        while(BusyXLCD());
        WriteCmdXLCD(0b00000001);
    }
}



/**
 End of File
*/